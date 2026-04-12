import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

import { Hero } from "./collections/Hero"
import { NoticesPage } from './collections/Notice'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },


  collections: [Users, Media, Hero,
    {
      access: {
      create: () => true,
      read: () => true,   // Add this! Allows public to check if the collection exists/view metadata
      update: ({ req: { user } }) => !!user,
      delete: ({ req: { user } }) => !!user
      },
      slug: 'admissions',
      labels: { singular: 'Admission', plural: 'Admissions' },
      fields: [
        { name: 'studentName', type: 'text', required: true },
        { name: 'parentName', type: 'text', required: true },
        { name: 'phone', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'grade', type: 'text', required: true },
        { name: 'message', type: 'textarea' },
      ],
    },

    {
      slug: 'sick-leaves',
      labels: {
        singular: 'Sick Leave',
        plural: 'Sick Leaves',
      },
      access: {
        create: () => true, // allow public submission
        read: () => true,   // Add this! Allows public to check if the collection exists/view metadata
        update: ({ req: { user } }) => !!user,
        delete: ({ req: { user } }) => !!user,
      },
      fields: [
        {
          name: 'studentName',
          type: 'text',
          required: true,
        },
        {
          name: 'grade',
          type: 'text',
          required: true,
        },
        {
          name: 'parentName',
          type: 'text',
          required: true,
        },
        {
          name: 'startDate',
          type: 'date',
          required: true,
        },
        {
          name: 'endDate',
          type: 'date',
          required: true,
        },
        {
          name: 'reason',
          type: 'textarea',
          required: true,
        },
      ],
    }

  ],
  globals:[NoticesPage],

  cors: [
    
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:3001',
    'http://localhost:3000/admin',
    'http://localhost:3001/admin',
    'http://10.28.209.232:5173',
    'http://10.28.209.232:3000',
    'https://school-three-kappa.vercel.app'
  ].filter(Boolean),
  csrf: [
  
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:3001',
    'http://localhost:3000/admin',
    'http://localhost:3001/admin',
    'http://10.28.209.232:5173',
    'http://10.28.209.232:3000',
    'https://school-three-kappa.vercel.app'
  ].filter(Boolean),


  

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})

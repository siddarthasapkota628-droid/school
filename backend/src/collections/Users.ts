import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    // Allows anyone to create a user (if you want public sign-up)
    // or change to ({ req: { user } }) => !!user to restrict to logged-in admins
    create: () => true, 
    
    // Allows logged-in users to read/update/delete
    read: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    // Add custom fields here
  ],
}
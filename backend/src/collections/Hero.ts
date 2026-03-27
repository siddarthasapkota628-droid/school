import { CollectionConfig } from "payload/types"

export const Hero: CollectionConfig = {
  slug: "hero",
  access: {
    read: () => true, // public access
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      default:'Welcome to',
    },
    {
      name: "highlightText",
      type: "text",
      default: " Nijananda Gurukulam",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      default: "A place where traditional values meet modern education. Located in Gothatar, Nautandham, we nurture young minds with academic excellence, discipline, and strong moral values.",
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "buttons",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
        },
        {
          name: "link",
          type: "text",
        },
        {
          name: "variant",
          type: "select",
          options: ["primary", "secondary"],
        },
      ],
    },
  ],
}
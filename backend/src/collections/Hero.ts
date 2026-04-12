import { CollectionConfig } from "payload"

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
      
    },
    {
      name: "highlightText",
      type: "text",
     
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    
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
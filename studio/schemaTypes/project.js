export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category Label',
      type: 'string',
      description: 'e.g. Mobile App, Web App, Backend System, Full Stack',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'filterTag',
      title: 'Filter Tag',
      type: 'string',
      description: 'Filter category for the portfolio buttons',
      options: {
        list: [
          { title: 'Mobile', value: 'mobile' },
          { title: 'Web', value: 'web' },
          { title: 'Backend', value: 'backend' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon / Emoji',
      type: 'string',
      description: 'Emoji (e.g. 📱, 🛒, 🔗) or icon class',
      initialValue: '🚀',
    },
    {
      name: 'color',
      title: 'Theme Color',
      type: 'string',
      description: 'Hex color code for accents, e.g. #7c3aed',
      initialValue: '#7c3aed',
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Displayed on the project card in the grid',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      rows: 5,
      description: 'Detailed description displayed inside the modal dialog',
    },
    {
      name: 'image',
      title: 'Project Screenshot / Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tech',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'demo',
      title: 'Live Demo URL',
      type: 'url',
    },
    {
      name: 'store',
      title: 'App Store / Play Store URL',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};

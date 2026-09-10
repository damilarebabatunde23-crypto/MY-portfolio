export default {
  name: 'mobileApp',
  title: 'Mobile App Showcase',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'App Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tag',
      title: 'Category / Tag',
      type: 'string',
      description: 'e.g. Health & Fitness, Finance',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'emoji',
      title: 'Icon / Emoji',
      type: 'string',
      initialValue: '📱',
    },
    {
      name: 'color',
      title: 'Gradient / Theme CSS',
      type: 'string',
      description: 'CSS background, e.g. linear-gradient(135deg, #4f46e5, #4f46e5)',
      initialValue: 'linear-gradient(135deg, #4f46e5, #4f46e5)',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'appStore',
      title: 'Apple App Store URL',
      type: 'url',
    },
    {
      name: 'playStore',
      title: 'Google Play Store URL',
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

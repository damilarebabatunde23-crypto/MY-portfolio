export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon or Emoji',
      type: 'string',
      description: 'Emoji (e.g. 🐦) or Devicon / FontAwesome class name (e.g. devicon-flutter-plain colored)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      title: 'Brand / Accent Color',
      type: 'string',
      description: 'Hex color code, e.g. #54C5F8',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Mobile', value: 'mobile' },
          { title: 'Database / Cloud', value: 'database' },
          { title: 'Tools & DevOps', value: 'devops' },
          { title: 'Design', value: 'design' },
        ],
      },
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

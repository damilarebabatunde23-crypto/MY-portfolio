export default {
  name: 'skillBar',
  title: 'Skill Bar (Proficiency)',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Skill Label',
      type: 'string',
      description: 'e.g. Flutter & Dart',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pct',
      title: 'Percentage (%)',
      type: 'number',
      description: 'Value between 0 and 100',
      validation: (Rule) => Rule.required().min(0).max(100),
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

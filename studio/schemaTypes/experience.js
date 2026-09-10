export default {
  name: 'experience',
  title: 'Experience & Education',
  type: 'document',
  fields: [
    {
      name: 'period',
      title: 'Time Period',
      type: 'string',
      description: 'e.g. 2023 – Present or 2018 – 2022',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role / Degree / Certificate Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'organization',
      title: 'Company / Institution / Issuer',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Category Type',
      type: 'string',
      options: {
        list: [
          { title: 'Work Experience', value: 'work' },
          { title: 'Education', value: 'education' },
          { title: 'Certification', value: 'cert' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
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

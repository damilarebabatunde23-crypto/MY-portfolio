export default {
  name: 'resumeDoc',
  title: 'Resume & Certificates',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Document Title',
      type: 'string',
      description: 'e.g. Curriculum Vitae, Google Cloud Certificate',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle / Issue Info',
      type: 'string',
      description: 'e.g. Updated 2025 or Associate Cloud Engineer',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon / Emoji',
      type: 'string',
      description: 'Emoji (e.g. 📄, 🏆, ☁️, 🎓)',
      initialValue: '📄',
    },
    {
      name: 'file',
      title: 'Document File (PDF / DOCX)',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'preview',
      title: 'Enable Preview Button',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'download',
      title: 'Enable Download Button',
      type: 'boolean',
      initialValue: true,
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

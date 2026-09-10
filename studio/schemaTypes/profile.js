export default {
  name: 'profile',
  title: 'Profile Information',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      description: 'e.g. Full Stack & Mobile Developer',
    },
    {
      name: 'description',
      title: 'Bio / About Me',
      type: 'text',
      rows: 4,
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Lagos, Nigeria / Remote',
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code, e.g. +2348012345678',
    },
    {
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'twitter',
      title: 'Twitter / X URL',
      type: 'url',
    },
    {
      name: 'dribbble',
      title: 'Dribbble URL',
      type: 'url',
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    },
  ],
};

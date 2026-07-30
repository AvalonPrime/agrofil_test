import type { Service } from '~/types/content'

/** Static services — Strapi-shaped for a later API swap. */
export const services: Service[] = [
  {
    id: 1,
    attributes: {
      slug: 'organic-soil-management',
      title: 'Organic soil management',
      description:
        'Building living soil systems that improve fertility and long-term crop health.',
      seo: {
        metaTitle: 'Organic soil management',
        metaDescription:
          'Building living soil systems that improve fertility and long-term crop health.',
      },
    },
  },
  {
    id: 2,
    attributes: {
      slug: 'crop-rotation-planning',
      title: 'Crop rotation planning',
      description:
        'Strategic rotation plans that protect soil and increase seasonal yield.',
      seo: {
        metaTitle: 'Crop rotation planning',
        metaDescription:
          'Strategic rotation plans that protect soil and increase seasonal yield.',
      },
    },
  },
  {
    id: 3,
    attributes: {
      slug: 'natural-pest-control',
      title: 'Natural pest control',
      description:
        'Using biological and organic methods to protect crops without harmful chemicals.',
      seo: {
        metaTitle: 'Natural pest control',
        metaDescription:
          'Using biological and organic methods to protect crops without harmful chemicals.',
      },
    },
  },
  {
    id: 4,
    attributes: {
      slug: 'composting-solutions',
      title: 'Composting solutions',
      description:
        'Turning organic waste into nutrient-rich compost to enhance soil quality.',
      seo: {
        metaTitle: 'Composting solutions',
        metaDescription:
          'Turning organic waste into nutrient-rich compost to enhance soil quality.',
      },
    },
  },
]

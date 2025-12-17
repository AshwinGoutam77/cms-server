import type { Schema, Struct } from '@strapi/strapi';

export interface CardUseCases extends Struct.ComponentSchema {
  collectionName: 'components_card_use_cases';
  info: {
    displayName: 'use-cases';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subheading: Schema.Attribute.Text;
  };
}

export interface CaseCases extends Struct.ComponentSchema {
  collectionName: 'components_case_cases';
  info: {
    displayName: 'cases';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CompanyLinksCompanyLinks extends Struct.ComponentSchema {
  collectionName: 'components_company_links_company_links';
  info: {
    displayName: 'companyLinks';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CounterCounters extends Struct.ComponentSchema {
  collectionName: 'components_counter_counters';
  info: {
    displayName: 'counters';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface CtaCta extends Struct.ComponentSchema {
  collectionName: 'components_cta_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    cta: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface MainctaMainCta extends Struct.ComponentSchema {
  collectionName: 'components_maincta_main_ctas';
  info: {
    displayName: 'mainCTA';
  };
  attributes: {
    button: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface NavLinksNavLinks extends Struct.ComponentSchema {
  collectionName: 'components_nav_links_nav_links';
  info: {
    displayName: 'navLinks';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PartnersLogos extends Struct.ComponentSchema {
  collectionName: 'components_partners_logos';
  info: {
    displayName: 'logos';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ResourcesLinksResourceLinks extends Struct.ComponentSchema {
  collectionName: 'components_resources_links_resource_links';
  info: {
    displayName: 'resourceLinks';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ServicesItem extends Struct.ComponentSchema {
  collectionName: 'components_services_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'navLinks';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SocialLinksSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.use-cases': CardUseCases;
      'case.cases': CaseCases;
      'company-links.company-links': CompanyLinksCompanyLinks;
      'counter.counters': CounterCounters;
      'cta.cta': CtaCta;
      'maincta.main-cta': MainctaMainCta;
      'nav-links.nav-links': NavLinksNavLinks;
      'partners.logos': PartnersLogos;
      'resources-links.resource-links': ResourcesLinksResourceLinks;
      'services.item': ServicesItem;
      'shared.logo': SharedLogo;
      'shared.media': SharedMedia;
      'shared.nav-links': SharedNavLinks;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'social-links.social-links': SocialLinksSocialLinks;
    }
  }
}

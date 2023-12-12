import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeAgency extends Schema.Component {
  collectionName: 'components_home_agencies';
  info: {
    displayName: 'agency';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
  };
}

export interface HomeHome extends Schema.Component {
  collectionName: 'components_home_homes';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    bannerVideo: Attribute.Media;
  };
}

export interface HomeOffer extends Schema.Component {
  collectionName: 'components_home_offers';
  info: {
    displayName: 'offer';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.agency': HomeAgency;
      'home.home': HomeHome;
      'home.offer': HomeOffer;
    }
  }
}

import React from 'react';

import Sticky from "./../Sticky";
import { Header } from "./Header";
import { Page } from "./Page";

export default {
    title: 'Sticky',
    component: Sticky,
}

export const StickyHeaderAndFooter = () => <div className="container">
          <Sticky className="stickyStyle" scrollIndex={150}>
            <Header className="header" user={{}}/>
          </Sticky>
          <Page className="article" />

          <Sticky className="stickyStyle-bottom" scrollIndex={10}>
            <footer>This is a sticky footer</footer>
          </Sticky>
        </div>;

export const StickyHeader = () => <div className="container">
          <Sticky className="stickyStyle" scrollIndex={150}>
            <Header className="header" user={{}}/>
          </Sticky>
          <Page className="article" />
          <footer>This is a sticky footer</footer>
        </div>;


StickyHeaderAndFooter.storyName = 'Header and Footer';

export const systemState = {
  updated: Date.now(),
  drawer: {
    open: false
  },
  confirm: {
    open: false,
    params: null
  },
  systemMessage: {
    open: false,
    params: null
  },
  nav: [
    {
      label: `Home`,
      description: `Home`,
      id: `content_000001`,
      path: `/`,
      icon: `home`
    },
    {
      label: `GitHub`,
      description: `Where code lives`,
      id: `content_000006`,
      icon: `github`,
      path: `/github`
    },
    // {
    //   label: `WordPress`,
    //   description: `The world's CMS`,
    //   id: `content_000005`,
    //   icon: `wordpress`,
    //   path: `/wordpress`
    // },
    // {
    //   label: `Storybook`,
    //   description: `Design System`,
    //   id: `content_000002`,
    //   path: `/storybook`,
    //   icon: `storybook`
    // },
    // {
    //   label: `RESTful API`,
    //   description: `Node on Firebase Cloud Functions`,
    //   id: `content_000003`,
    //   path: `/rest-api`,
    //   icon: `api`
    // },
    {
      label: `Privacy`,
      description: `Privacy === Respect`,
      id: `content_000004`,
      path: `/privacy`,
      icon: `privacy`
    }
  ]
};

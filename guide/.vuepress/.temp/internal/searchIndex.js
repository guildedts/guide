export const searchIndex = [
  {
    "title": "Contributing",
    "headers": [
      {
        "level": 2,
        "title": "Getting started",
        "slug": "getting-started",
        "link": "#getting-started",
        "children": []
      }
    ],
    "path": "/Contributing.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Introduction",
    "headers": [
      {
        "level": 2,
        "title": "Before you begin",
        "slug": "before-you-begin",
        "link": "#before-you-begin",
        "children": []
      },
      {
        "level": 2,
        "title": "Examples",
        "slug": "examples",
        "link": "#examples",
        "children": []
      }
    ],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Creating commands",
    "headers": [
      {
        "level": 2,
        "title": "Creating a command",
        "slug": "creating-a-command",
        "link": "#creating-a-command",
        "children": []
      },
      {
        "level": 2,
        "title": "Using args",
        "slug": "using-args",
        "link": "#using-args",
        "children": []
      }
    ],
    "path": "/creating-your-bot/creating-commands.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Listening for Events",
    "headers": [],
    "path": "/creating-your-bot/listening-for-events.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Starting your bot",
    "headers": [
      {
        "level": 2,
        "title": "Creating a configuration file",
        "slug": "creating-a-configuration-file",
        "link": "#creating-a-configuration-file",
        "children": []
      },
      {
        "level": 2,
        "title": ".gitignore",
        "slug": "gitignore",
        "link": "#gitignore",
        "children": []
      },
      {
        "level": 2,
        "title": "Starting your bot",
        "slug": "starting-your-bot-1",
        "link": "#starting-your-bot-1",
        "children": [
          {
            "level": 3,
            "title": "Using the CLI",
            "slug": "using-the-cli",
            "link": "#using-the-cli",
            "children": []
          },
          {
            "level": 3,
            "title": "Creating a custom client",
            "slug": "creating-a-custom-client",
            "link": "#creating-a-custom-client",
            "children": []
          }
        ]
      }
    ],
    "path": "/creating-your-bot/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Publishing your bot",
    "headers": [],
    "path": "/getting-started/publishing-your-bot.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Preparation",
    "headers": [
      {
        "level": 2,
        "title": "Installing Node.JS",
        "slug": "installing-node-js",
        "link": "#installing-node-js",
        "children": []
      },
      {
        "level": 2,
        "title": "Initiating a project",
        "slug": "initiating-a-project",
        "link": "#initiating-a-project",
        "children": []
      },
      {
        "level": 2,
        "title": "Installing required dependencies",
        "slug": "installing-required-dependencies",
        "link": "#installing-required-dependencies",
        "children": []
      }
    ],
    "path": "/getting-started/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Setting up a bot",
    "headers": [
      {
        "level": 2,
        "title": "Creating a bot",
        "slug": "creating-a-bot",
        "link": "#creating-a-bot",
        "children": []
      },
      {
        "level": 2,
        "title": "Getting your bot token",
        "slug": "getting-your-bot-token",
        "link": "#getting-your-bot-token",
        "children": []
      }
    ],
    "path": "/getting-started/setting-up-a-bot.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}

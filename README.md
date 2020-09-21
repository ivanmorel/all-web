# all Mega - Shopify Theme

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

- [A Labor of Love - Shopify Theme](#all-mega---shopify-theme)
    - [Requirements](#requirements)
        - [Install the Shopify Theme Kit.](#install-the-shopify-theme-kit)
    - [Development Workflow](#development-workflow)
        - [Clone Github Repo](#clone-github-repo)
        - [Clone Main Theme in Shopify](#clone-main-theme-in-shopify)
        - [Install npm project](#install-npm-project)
        - [Run npm project](#run-npm-project)
            - [Variable interpolation into config.yml](#variable-interpolation-into-configyml)
        - [Create Pull request of new changes](#create-pull-request-of-new-changes)
        - [Push Last changes to an environment theme](#push-last-changes-to-an-environment-theme)

<!-- markdown-toc end -->

## Requirements
### Install the Shopify Theme Kit.
Theme Kit is a command-line tool for Shopify themes. Download the application and with a tiny bit of setup, you’re off to the theme creation races.

Using Theme Kit will enable you to

Upload Themes to Multiple Environments
Fast Uploads and Downloads
Watch for local changes and upload automatically to Shopify
Works on Windows, Linux, and macOS

Usage guide of Theme Kit could be found on the official website: https://shopify.github.io/themekit/

## Development Workflow
To optimize our development process, when we work on creating themes it is necessary to follow a set of steps to ensure the integrity of our changes and to be able to access them through a Version Control manager.

Clone the GitHub repository.

### Clone Main Theme in Shopify
In the Shopify store, we need to clone the Main theme (The one with latest changes) and rename the new theme as the Theme's Name plus your name. Click customize and from the URL copy the theme_id and replace the value set in .env.local (In this way when you do new changes you will be testing in the new theme and not in the main one. This is really important because if you ignore this step you can overwrite other members changes)

then do the following command:
```
  theme download
```

### Install Node.js dependencies
If haven't installed the project yet, run `npm install`

### Run the project
The project will run the `my_all_staging` configuration by default (which is defined
in your `config.yml` file) so make sure to set up your own theme; then, you're
able to run the command `npm start`. You can change the theme environment by
adding the following variable `APP_ENV=development npm start`.
The command `npm start` will initalize themekit's watch, webpack's watch and sass's watch.
It is prudent to not store your private secrets in your repository so you need to set these values in your environment files. Check the example .env file to get an idea of how your .env.local, .env.staging and .env.production files should look like.

The local env file will also have info about your local theme in the production shop. To test and develop directly in the production shop, run the `npm run start:allmega` command instead.

On deployment and for local development `.env.<environment>` should be available locally to generate the `variables` file. For the above `config.yml` example, our .env file would look like this:
```
DEV_PASSWD=0bwef09hn23048sdkl2345n2k3
DEV_THEMEID=123
DEV_SHOP=can-i-buy-a-feeling.myshopify.com
```

Note that this does not provide auto-reload (a future nice-to-have TODO. Other Shopify toolkits have struggled with this)

### Create Pull request of new changes
Whenever you complete the feature you was working on, you need to create a new git branch and add a new pull request with your changes. After approval, you can merge the changes you introduced to the main branch.

The main branch will be different depending on the shop that you are working on:
- For changes in the staging shop, `staging` is the main branch and new features branches should be pulled from it and PRs should be created against it.
- For changes worked directly in the production shop, the main branch is `production`

### Push Last changes to an environment theme
Go to the base branch (`staging` or `production`, depending on the shop you are working on) branch and verify that the theme_id in the corresponding .env file is the one related to the environment theme where you want to upload the new changes after this do the following command:

```
  npm run deploy
```

and the changes will be pushed to the specified theme.

Please note that deploying from branches other than `staging` or `production` will result in an error to avoid accidental deploys of unmerged work.

**Note**: Please be careful when releasing to these themes and make sure to be in the corresponding branch and make sure it is updated before launching the release.

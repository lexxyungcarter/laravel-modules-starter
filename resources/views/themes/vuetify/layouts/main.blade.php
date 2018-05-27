<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  @yield('pre-styles')
  {{ Html::style('themes/vuetify/css/vuetify-fonts.css') }}
  {{ Html::style('themes/vuetify/css/vuetify.min.css') }}
  <title>@yield('title') | {{ m_setting('setting.site-name') }}</title>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  @include('partials.common-styles')
  @yield('styles')

  @include('partials.seo-header')
</head>
<body>

  <div id="app">
    <v-app>
      <v-navigation-drawer app></v-navigation-drawer>
      <v-toolbar app></v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
          @include('flash::message')
          @yield('content')
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
 
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>
  @include('partials.common-scripts')

  @yield('scripts')
</body>
</html>
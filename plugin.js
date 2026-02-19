// Registers a button in the header to open the importer
PluginAPI.registerHeaderButton({
  id: 'import-media-btn',
  label: 'Import Media Files',
  icon: 'movie_filter', // Material icon
  onClick: () => {
    PluginAPI.showIndexHtmlAsView();
  },
});

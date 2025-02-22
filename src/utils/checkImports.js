// File: src/utils/checkImports.js

export function checkRequiredComponents() {
    const required = [
      'Hero',
      'Activities',
      'Community',
      'CommunityJoin',
      'FounderSection',
      'Events',
      'Navigation',
      'ScrollTopButton',
      'VideoLibrary'
    ];
  
    const missing = [];
  
    required.forEach(component => {
      try {
        require(`../components/${component}`);
      } catch (error) {
        missing.push(component);
      }
    });
  
    if (missing.length > 0) {
      console.error('Missing required components:', missing);
    }
  
    return missing;
  }
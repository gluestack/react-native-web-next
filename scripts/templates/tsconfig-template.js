module.exports = () => {
  return `{
    "include": ["src"],
    "exclude": ["node_modules", "example"],
    "compilerOptions": {
      "paths": {
        // Add package relative path here to load types
        // "@gluestack-ui/react-native-aria": ["../react-native-aria/src"],
        // "@gluestack-ui/utils": ["../utils/src"],
      },
      "emitDeclarationOnly": true,
      "noEmit": false,
      "baseUrl": "",
      "declaration": true,
      "allowUnreachableCode": false,
      "allowUnusedLabels": true,
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "jsx": "react",
      "lib": ["esnext", "dom"],
      "module": "esnext",
      "moduleResolution": "node",
      "noFallthroughCasesInSwitch": true,
      "noImplicitReturns": true,
      "noImplicitUseStrict": false,
      "noStrictGenericChecks": false,
      "noUnusedLocals": false,
      "noUnusedParameters": true,
      "resolveJsonModule": true,
      "skipLibCheck": true,
      "strict": true,
      "target": "esnext"
    }
  }
  `;
};

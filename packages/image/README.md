# react-native-web-next-image

## Installation

To use react-native-web-next-image components, all you need to do is install the
`react-native-web-next-image` package:

```sh
$ yarn add react-native-web-next-image

# or

$ npm i react-native-web-next-image
```

## Usage

This is an Image component which supports the `react-native Image` API which internally renders NextImage

```jsx
import { Image } from 'react-native-web-next-image';

// Write this code snippet at the root of your application
function App({ children }) {
  return <Image source={'example.png'} height={50} width={50} />;
}
```

import { View } from 'react-native';
import { Image } from '@react-native-web-next/image';

export default function Home() {
  return (
    <View>
      <Image
        source={'./next.svg'}
        alt="dhdjh"
        style={{ width: 100 }}
        height={100}
        // width={500}
        // layout="fill"
        // objectFit="contain"
      />
    </View>
  );
}

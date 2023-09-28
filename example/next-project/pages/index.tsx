import { View, Text } from 'react-native';
import { Image } from 'react-native-web-next-image';
import { Link } from 'react-native-web-next-link';
import NextLink from 'next/link';
export default function Home() {
  return (
    <View style={{ gap: 50 }}>
      <Image
        source={'./next.svg'}
        alt="dhdjh"
        style={{ width: 100 }}
        // height={100}
        // width={500}
        // layout="fill"
        objectFit="contain"
      />
      <Link href="https://nextjs.org/docs">JDHJHD</Link>
      <NextLink href="https://nextjs.org/docs">dhdjh</NextLink>

      <Link href="/" style={{ backgroundColor: 'green' }}>
        <Text>go to</Text>
      </Link>
    </View>
  );
}

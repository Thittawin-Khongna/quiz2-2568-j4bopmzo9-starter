import { Text, Group } from "@mantine/core";
import type { FooterProps } from "../libs/Footer";
export default function Footer({fullName , studentId} : FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        @ {fullName} {studentId} CPE207-2025. All rights reserved.
      </Text>
    </Group>
  );
}

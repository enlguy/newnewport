// emails/NewVisitorMessage.tsx
import { Html } from '@react-email/html'

export default function NewVisitorMessage({ anonToken }: { anonToken: string }) {
  return (
    <Html>
      <h2>New message from visitor {anonToken}</h2>
      <p>Check your admin panel to reply.</p>
    </Html>
  )
}

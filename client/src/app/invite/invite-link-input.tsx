import { Copy, Link } from 'lucide-react'
import { IconButton } from '../components/icon-button'
import { InputField, InputIcon, InputRoot } from '../components/input'

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField
        readOnly
        defaultValue="http://localhost:3000/invite/sougostoso"
      />
      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}

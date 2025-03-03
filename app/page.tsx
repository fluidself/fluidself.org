import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-medium">Projects</h2>
      <h3 className="text-lg text-secondary-foreground">Dunlin</h3>
      <p>
        Dunlin is an open source notebook and knowledge graph that helps individuals, DAOs, and other communities
        capture, organize, make sense of, and share complex information. All notes are encrypted and can only by
        decrypted by the intended audience.
      </p>
      <p>
        Individuals can use Dunlin to take notes, journal, and compile their ideas, thoughts, and research in an
        interconnected context.
      </p>
      <p>
        DAOs and other communities can manage projects, carry out collaborative research, and create knowledge bases,
        FAQs, and guides. Access to workspaces can be granted using tokens, NFTs, and blockchain identity as keys.
      </p>
      <ul className="list-disc marker:text-muted-foreground pl-[26px]">
        <li className="pl-1.5 my-1">
          <a href="https://dunlin.xyz" className="hover:text-link underline">
            dunlin.xyz
          </a>
        </li>
        <li className="pl-1.5 my-1">
          <a href="https://github.com/fluidself/dunlin" className="hover:text-link underline">
            github.com/fluidself/dunlin
          </a>
        </li>
      </ul>
      <Separator />
      <h2 className="text-2xl font-medium">Contact</h2>
      <p>me@fluidself.org</p>
    </div>
  );
}

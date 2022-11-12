import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className="p-4 border-b-2 flex flex-row bg-gradient-to-r from-cyan-500 to-blue-500">
            <h1 className="py-2 px-4 font-bold text-4xl"> Decentralized Lottery</h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
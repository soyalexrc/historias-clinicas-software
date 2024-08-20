import {Input} from "@/components/ui/input";

export default function Page() {
    return (
        <div className="p-6">
            <h1 className="text-2xl mb-2">Reportes</h1>
            <div className="grid grid-cols-12">
                <Input className="h-8" type="text" placeholder="Email" />
            </div>
        </div>
    )
}

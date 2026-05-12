import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/Button";

export default function SpeakerList() {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Speaker List</h1>

                <Link to="/dashboard/speakers/create">
                    <Button label="Tambah Speaker" variant="primary" />
                </Link>
            </div>
        </div>
    );
}
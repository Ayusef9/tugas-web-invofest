import { Link } from "react-router-dom";
import Button from "../../../../components/ui/Button";

export default function EventList() {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Event List</h1>

                <Link to="/dashboard/create/events">
                    <Button label="Tambah Event" variant="primary" />
                </Link>
            </div>
        </div>
    );
}
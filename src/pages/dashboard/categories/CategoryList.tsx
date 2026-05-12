import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/Button";

export default function CategoryList() {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Category List</h1>

                <Link to="/dashboard/category/create">
                    <Button label="Tambah Category" variant="primary" />
                </Link>
            </div>
        </div>
    );
}
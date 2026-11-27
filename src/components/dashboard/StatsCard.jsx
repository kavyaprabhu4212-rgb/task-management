import { Card, CardContent } from "@/components/ui/card";

import {
    ListTodo,
    CheckCircle2,
    Clock,
    AlertCircle
} from "lucide-react";

function StatsCard({ title, value, icon: Icon, color, bgColor }) {

    return (

        <Card className="border-none shadow-sm hover:shadow-md transition-all">

            <CardContent className="p-5">

                <div className="flex items-center justify-between">

                    {/* Left Section */}

                    <div>

                        <p className="text-sm font-medium text-gray-500">
                            {title}
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            {value}
                        </h2>

                    </div>


                    {/* Right Section */}

                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgColor}`}>

                        <Icon size={24} className={color} />

                    </div>

                </div>

            </CardContent>

        </Card>

    );

}

export default StatsCard;
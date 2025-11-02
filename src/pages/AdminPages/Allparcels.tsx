import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { useGetAllparcelsQuery, useUpdateParcelStatusMutation } from "@/redux/features/parcels/getAllparcels.api";
import type { parcel } from "@/types";
import { Spinner } from "@/components/ui/spinner";

const Allparcels = () => {
    const { data: Allparcels, isLoading } = useGetAllparcelsQuery(undefined);
    console.log('data', Allparcels);
    // <h5 className="mx-auto text-center font-bold w-screen">All Parcels</h5>


    const [updateParcelStatus, { data, isLoading: updateParcelStatusLoading }] = useUpdateParcelStatusMutation(undefined);


    const handleUpdateBlockStatus = async (parcel, parcel_status) => {
        const updatedStatus = parcel.parcel_status === 'Blocked' ? 'ACTIVE' : 'Blocked';

        const updateStatus = {
            _id: parcel?._id,
            email: parcel?.email,
            parcel_status: updatedStatus,
        };
        const response = await updateParcelStatus(updateStatus).unwrap();
        console.log('response', response);
    };


    return (
        isLoading ?
            (<div className="min-h-screen flex flex-col justify-center align-middle items-center gap-4">
                <Spinner />
            </div>)
            :
            <div className="mx-5 my-5">
                <Table className="">
                    <TableHeader>
                        <TableRow className="bg-gray-100 border">
                            <TableHead className="border text-center">S.N</TableHead>
                            <TableHead className="border text-center">tracking_Id</TableHead>
                            <TableHead className="border text-center">Sender Email</TableHead>
                            <TableHead className="border text-center">Receiver Email</TableHead>
                            <TableHead className="border text-center">From Address</TableHead>
                            <TableHead className="border text-center">To Address</TableHead>
                            <TableHead className="border text-center">created_At</TableHead>
                            <TableHead className="border text-center">
                                Parcel Status
                            </TableHead>
                            <TableHead className="border text-center">
                                Action
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Allparcels?.data.map((parcel: parcel, index: number) => (
                            <TableRow key={parcel._id} className="text-center">
                                <TableCell className="font-medium border text-center">
                                    {index + 1}
                                </TableCell>
                                <TableCell className="font-medium border text-center">
                                    {parcel.trackingId}
                                </TableCell>
                                <TableCell className="border text-center">
                                    {parcel.sender_email}
                                </TableCell>
                                <TableCell className="border text-center">
                                    {parcel.receiver_email}
                                </TableCell>
                                <TableCell className="border text-center">
                                    {parcel.fromAddress}
                                </TableCell>
                                <TableCell className="border text-center">
                                    {parcel.toAddress}
                                </TableCell>
                                <TableCell className="border text-center">
                                    {parcel.createdAt}
                                </TableCell>
                                <TableCell className="border text-center">
                                    {parcel.parcel_status}
                                </TableCell>
                                <TableCell className="border text-center">
                                    <div className="flex flex-col gap-2">
                                        <Button onClick={() => handleUpdateBlockStatus(parcel, parcel.parcel_status)}>
                                            {(parcel.parcel_status === 'Blocked') ? 'Unblock' : 'Block'}
                                        </Button>
                                    {/* change available parcel status
                                        Requested = "Requested",
                                        Approved = "Approved",
                                        Dispatched = "Dispatched",
                                        In_Transit = "In_Transit",
                                        Delivered = "Delivered",
                                        Cancelled = "Cancelled",
                                        Returned = "Returned",
                                        Held = "Held",
                                        Blocked = "Blocked",
                                    */}
                                        <Button>Dropdown</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
    );
};

export default Allparcels;
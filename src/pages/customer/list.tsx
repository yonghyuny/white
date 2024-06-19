// pages/customer/list.tsx
import React, {useEffect, useState} from 'react';
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Typography
} from '@mui/material';
import CommonLayout from "@/components/layout/CommonLayout";

interface Customer {
    name: string;
    address: string;
    itemType: string;
    itemCount: string;
    availableTime: string;
    notes?: string;
}

const CustomerList: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        const storedCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
        setCustomers(storedCustomers);
    }, []);

    useEffect(() => {
        setFilteredCustomers(
            customers.filter((customer) =>
                customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                customer.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                customer.itemType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                customer.itemCount.toLowerCase().includes(searchTerm.toLowerCase()) ||
                customer.availableTime.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, customers]);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <CommonLayout>
            <Box sx={{ p: 3 }}>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        고객 리스트
                    </Typography>
                    <TextField
                        label="검색"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>고객 이름</TableCell>
                                    <TableCell>고객 주소</TableCell>
                                    <TableCell>요청한 물품 종류</TableCell>
                                    <TableCell>물품 갯수</TableCell>
                                    <TableCell>가능한 시간</TableCell>
                                    <TableCell>비고란</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredCustomers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((customer, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{customer.name}</TableCell>
                                        <TableCell>{customer.address}</TableCell>
                                        <TableCell>{customer.itemType}</TableCell>
                                        <TableCell>{customer.itemCount}</TableCell>
                                        <TableCell>{customer.availableTime}</TableCell>
                                        <TableCell>{customer.notes}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[10, 20, 30]}
                            component="div"
                            count={filteredCustomers.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainer>
                </Paper>
            </Box>
        </CommonLayout>
    );
};

export default CustomerList;

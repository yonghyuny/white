// pages/courier/list.tsx
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

interface Courier {
    name: string;
    experience: string;
    repairItems: string;
    serviceArea: string;
    notes?: string;
}

const CourierListPage: React.FC = () => {
    const [couriers, setCouriers] = useState<Courier[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredCouriers, setFilteredCouriers] = useState<Courier[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        const storedCouriers = localStorage.getItem('couriers');
        if (storedCouriers) {
            setCouriers(JSON.parse(storedCouriers));
        }
    }, []);

    useEffect(() => {
        setFilteredCouriers(
            couriers.filter((courier) =>
                courier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                courier.experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
                courier.repairItems.toLowerCase().includes(searchTerm.toLowerCase()) ||
                courier.serviceArea.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, couriers]);

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
                        기사 리스트
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
                                    <TableCell>기사 이름</TableCell>
                                    <TableCell>기사 경력</TableCell>
                                    <TableCell>수리 가능한 물품 목록</TableCell>
                                    <TableCell>수리 가능 지역</TableCell>
                                    <TableCell>비고란</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredCouriers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((courier, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{courier.name}</TableCell>
                                        <TableCell>{courier.experience}</TableCell>
                                        <TableCell>{courier.repairItems}</TableCell>
                                        <TableCell>{courier.serviceArea}</TableCell>
                                        <TableCell>{courier.notes}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[10, 20, 30]}
                            component="div"
                            count={filteredCouriers.length}
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

export default CourierListPage;

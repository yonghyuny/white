// pages/customer/edit.tsx
import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CommonLayout from "@/components/layout/CommonLayout";

interface Customer {
    name: string;
    address: string;
    itemType: string;
    itemCount: string;
    availableTime: string;
    notes?: string;
}

const CustomerEdit: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [formData, setFormData] = useState<Customer>({ name: '', address: '', itemType: '', itemCount: '', availableTime: '', notes: '' });

    useEffect(() => {
        const storedCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
        setCustomers(storedCustomers);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        setFormData(customers[index]);
    };

    const handleDelete = (index: number) => {
        const updatedCustomers = customers.filter((_, i) => i !== index);
        setCustomers(updatedCustomers);
        localStorage.setItem('customers', JSON.stringify(updatedCustomers));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (editingIndex !== null) {
            const updatedCustomers = customers.map((customer, index) => index === editingIndex ? formData : customer);
            setCustomers(updatedCustomers);
            localStorage.setItem('customers', JSON.stringify(updatedCustomers));
            setEditingIndex(null);
            setFormData({ name: '', address: '', itemType: '', itemCount: '', availableTime: '', notes: '' });
        }
    };

    return (
        <CommonLayout>
            <Box sx={{ p: 3 }}>
                <Paper sx={{ p: 3, mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        고객 정보 수정하기
                    </Typography>
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={handleSubmit}>
                        <TextField label="고객 이름" name="name" variant="outlined" fullWidth value={formData.name} onChange={handleInputChange} />
                        <TextField label="고객 주소" name="address" variant="outlined" fullWidth value={formData.address} onChange={handleInputChange} />
                        <TextField label="요청한 물품 종류" name="itemType" variant="outlined" fullWidth value={formData.itemType} onChange={handleInputChange} />
                        <TextField label="물품 갯수" name="itemCount" variant="outlined" fullWidth value={formData.itemCount} onChange={handleInputChange} />
                        <TextField label="가능한 시간" name="availableTime" variant="outlined" fullWidth value={formData.availableTime} onChange={handleInputChange} />
                        <TextField label="비고란" name="notes" variant="outlined" fullWidth value={formData.notes} onChange={handleInputChange} />
                        <Button variant="contained" type="submit">수정하기</Button>
                    </Box>
                </Paper>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        등록된 고객 목록
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>이름</TableCell>
                                    <TableCell>주소</TableCell>
                                    <TableCell>요청한 물품</TableCell>
                                    <TableCell>갯수</TableCell>
                                    <TableCell>가능한 시간</TableCell>
                                    <TableCell>비고</TableCell>
                                    <TableCell>수정</TableCell>
                                    <TableCell>삭제</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {customers.map((customer, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{customer.name}</TableCell>
                                        <TableCell>{customer.address}</TableCell>
                                        <TableCell>{customer.itemType}</TableCell>
                                        <TableCell>{customer.itemCount}</TableCell>
                                        <TableCell>{customer.availableTime}</TableCell>
                                        <TableCell>{customer.notes}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => handleEdit(index)}>
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => handleDelete(index)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </CommonLayout>
    );
};

export default CustomerEdit;

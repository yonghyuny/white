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

interface Courier {
    name: string;
    experience: string;
    repairItems: string;
    serviceArea: string;
    notes?: string;
}

const CourierEdit: React.FC = () => {
    const [couriers, setCouriers] = useState<Courier[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [formData, setFormData] = useState<Courier>({ name: '', experience: '', repairItems: '', serviceArea: '', notes: '' });

    useEffect(() => {
        const storedCouriers = JSON.parse(localStorage.getItem('couriers') || '[]');
        setCouriers(storedCouriers);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        setFormData(couriers[index]);
    };

    const handleDelete = (index: number) => {
        const updatedCouriers = couriers.filter((_, i) => i !== index);
        setCouriers(updatedCouriers);
        localStorage.setItem('couriers', JSON.stringify(updatedCouriers));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (editingIndex !== null) {
            const updatedCouriers = couriers.map((courier, index) => index === editingIndex ? formData : courier);
            setCouriers(updatedCouriers);
            localStorage.setItem('couriers', JSON.stringify(updatedCouriers));
            setEditingIndex(null);
            setFormData({ name: '', experience: '', repairItems: '', serviceArea: '', notes: '' });
        }
    };

    return (
        <CommonLayout>
            <Box sx={{ p: 3 }}>
                <Paper sx={{ p: 3, mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        기사 정보 수정하기
                    </Typography>
                    <Box
                        component="form"
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            label="기사 이름"
                            name="name"
                            variant="outlined"
                            fullWidth
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <TextField
                            label="기사 경력"
                            name="experience"
                            variant="outlined"
                            fullWidth
                            value={formData.experience}
                            onChange={handleInputChange}
                        />
                        <TextField
                            label="수리 가능한 물품 목록"
                            name="repairItems"
                            variant="outlined"
                            fullWidth
                            value={formData.repairItems}
                            onChange={handleInputChange}
                        />
                        <TextField
                            label="수리 가능 지역"
                            name="serviceArea"
                            variant="outlined"
                            fullWidth
                            value={formData.serviceArea}
                            onChange={handleInputChange}
                        />
                        <TextField
                            label="비고란"
                            name="notes"
                            variant="outlined"
                            fullWidth
                            value={formData.notes}
                            onChange={handleInputChange}
                        />
                        <Button variant="contained" type="submit">
                            수정하기
                        </Button>
                    </Box>
                </Paper>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        등록된 기사 목록
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>이름</TableCell>
                                    <TableCell>경력</TableCell>
                                    <TableCell>수리 항목</TableCell>
                                    <TableCell>지역</TableCell>
                                    <TableCell>비고</TableCell>
                                    <TableCell>수정</TableCell>
                                    <TableCell>삭제</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {couriers.map((courier, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{courier.name}</TableCell>
                                        <TableCell>{courier.experience}</TableCell>
                                        <TableCell>{courier.repairItems}</TableCell>
                                        <TableCell>{courier.serviceArea}</TableCell>
                                        <TableCell>{courier.notes}</TableCell>
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

export default CourierEdit;

// pages/customer/signup.tsx
import React, {useState} from 'react';
import {Box, Button, Paper, TextField, Typography} from '@mui/material';
import CommonLayout from "@/components/layout/CommonLayout";

const CustomerSignUp: React.FC = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [itemType, setItemType] = useState('');
    const [itemCount, setItemCount] = useState('');
    const [availableTime, setAvailableTime] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors = [];
        if (!name) errors.push('고객 이름');
        if (!address) errors.push('고객 주소');
        if (!itemType) errors.push('물품 목록');
        if (!itemCount) errors.push('물품 갯수');
        if (!availableTime) errors.push('수리 가능 시간');

        if (!name || !address || !itemType || !itemCount || !availableTime) {
            alert(`다음 필드를 채워주세요: ${errors.join(', ')}`);
            return;
        }

        const newCustomer = {
            name,
            address,
            itemType,
            itemCount,
            availableTime,
            notes,
        };

        const existingCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
        const updatedCustomers = [...existingCustomers, newCustomer];
        localStorage.setItem('customers', JSON.stringify(updatedCustomers));

        setName('');
        setAddress('');
        setItemType('');
        setItemCount('');
        setAvailableTime('');
        setNotes('');
    };

    return (
        <CommonLayout>
            <Box sx={{ p: 3 }}>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        고객 등록하기
                    </Typography>
                    <Box
                        component="form"
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            label="고객 이름"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="고객 주소"
                            variant="outlined"
                            fullWidth
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <TextField
                            label="요청한 물품 종류"
                            variant="outlined"
                            fullWidth
                            value={itemType}
                            onChange={(e) => setItemType(e.target.value)}
                        />
                        <TextField
                            label="물품 갯수"
                            variant="outlined"
                            fullWidth
                            value={itemCount}
                            onChange={(e) => setItemCount(e.target.value)}
                        />
                        <TextField
                            label="가능한 시간"
                            variant="outlined"
                            fullWidth
                            value={availableTime}
                            onChange={(e) => setAvailableTime(e.target.value)}
                        />
                        <TextField
                            label="비고란"
                            variant="outlined"
                            fullWidth
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                        <Button variant="contained" type="submit">
                            등록하기
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </CommonLayout>
    );
};

export default CustomerSignUp;

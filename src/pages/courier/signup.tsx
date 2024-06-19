import React, {useState} from 'react';
import {Box, Button, Paper, TextField, Typography} from '@mui/material';
import CommonLayout from "@/components/layout/CommonLayout";

const CourierSignUp: React.FC = () => {
    const [name, setName] = useState('');
    const [experience, setExperience] = useState('');
    const [repairItems, setRepairItems] = useState('');
    const [serviceArea, setServiceArea] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 필드 유효성 검사
        const errors = [];
        if (!name) errors.push('기사 이름');
        if (!experience) errors.push('기사 경력');
        if (!repairItems) errors.push('수리 가능한 물품 목록');
        if (!serviceArea) errors.push('수리 가능 지역');

        if (errors.length > 0) {
            alert(`다음 필드를 채워주세요: ${errors.join(', ')}`);
            return;
        }

        const newCourier = {
            name,
            experience,
            repairItems,
            serviceArea,
            notes,
        };

        // 기존 기사 목록을 가져옴
        const existingCouriers = JSON.parse(localStorage.getItem('couriers') || '[]');
        // 새로운 기사를 추가
        const updatedCouriers = [...existingCouriers, newCourier];
        // 로컬 스토리지에 저장
        localStorage.setItem('couriers', JSON.stringify(updatedCouriers));

        // 폼 초기화
        setName('');
        setExperience('');
        setRepairItems('');
        setServiceArea('');
        setNotes('');
    };

    return (
        <CommonLayout>
            <Box sx={{ p: 3 }}>
                <Paper sx={{ p: 3, mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        기사 등록하기
                    </Typography>
                    <Box
                        component="form"
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            label="기사 이름"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="기사 경력"
                            variant="outlined"
                            fullWidth
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                        />
                        <TextField
                            label="수리 가능한 물품 목록"
                            variant="outlined"
                            fullWidth
                            value={repairItems}
                            onChange={(e) => setRepairItems(e.target.value)}
                        />
                        <TextField
                            label="수리 가능 지역"
                            variant="outlined"
                            fullWidth
                            value={serviceArea}
                            onChange={(e) => setServiceArea(e.target.value)}
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

export default CourierSignUp;

import * as React from 'react';
import {Box, Button, IconButton, InputAdornment, TextField} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    // 비밀번호 가시성 토글 함수
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // 로그인 시 동작할 함수
    const handleLogin = () => {
        console.log("Login attempted with username:", username, "and password:", password);
    };

    return (
        <Box component="main" sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            p: 3,
            display: 'flex',       // Flexbox 사용
            flexDirection: 'column', // 수직 방향 정렬
            alignItems: 'center',  // 수평 중앙 정렬
            justifyContent: 'center', // 수직 중앙 정렬
            height: '100vh',       // 전체 높이 사용
        }}>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    maxWidth: 400,
                    width: '100%',        // 반응형 디자인 지원
                    p: 3,                // 패딩 조정
                }}
            >
                <TextField
                    label="아이디"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    label="비밀번호"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <Button variant="contained" onClick={handleLogin}>
                    로그인
                </Button>
            </Box>
        </Box>
    );
};

export default Login;


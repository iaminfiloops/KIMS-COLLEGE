import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface PDFViewerProps {
    pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
    const iframeStyle: React.CSSProperties = {
        width: '100%',
        height: '500px',
        border: 'none',
        borderRadius: '4px',
    };

    const handleDownload = () => {
        window.open(pdfUrl, '_blank');
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper elevation={3} sx={{ width: '80%', p: 2 }}>
                <Typography variant="h6" align="center" gutterBottom>
                    PDF Viewer
                </Typography>
                <iframe
                    src={pdfUrl}
                    title="PDF Viewer"
                    style={iframeStyle}
                />
                <Box display="flex" justifyContent="center" mt={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleDownload}
                    >
                        Download PDF
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default PDFViewer;

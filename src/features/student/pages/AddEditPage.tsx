import { Box, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Student } from 'types';
import studentApi from 'api/studentApi';

interface AddEditPageProps {}

export const AddEditPage = (props: AddEditPageProps) => {
	const { studentId } = useParams<{ studentId: string }>();
	const isEdit = Boolean(studentId);
	const [student, setStudent] = useState<Student>();

	useEffect(() => {
		if (!studentId) return;

		// IFFE
		(async () => {
			try {
				const response: Student = await studentApi.getById(studentId);
				setStudent(response);
			} catch (error) {
				console.log('failed to fetch student details: ', error);
			}
		})();
	}, [studentId]);

	console.log(student)

	return (
		<Box>
			<Link to="/admin/students">
				<Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
					<ChevronLeft /> &nbsp;Back to student list
				</Typography>
			</Link>

			<Typography variant="h4">{isEdit ? 'Update student' : 'Add new student'}</Typography>
		</Box>
	);
};

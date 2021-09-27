import { Box, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { City, Student } from 'types';
import { capitalizeString, getMarkColor } from 'utils';

const useStyles = makeStyles({
	table: {},
});

export interface StudentTableProps {
	studentList: Student[];
	onEdit?: (student: Student) => void;
	onRemove?: (student: Student) => void;
	cityMap: {
		[key: string]: City;
	};
}

export function StudentTable({ studentList, onEdit, onRemove, cityMap }: StudentTableProps) {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} size="small" aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="center">#</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Gender</TableCell>
						<TableCell>Mark</TableCell>
						<TableCell>City</TableCell>
						<TableCell align="right">Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{studentList.map((student, index) => (
						<TableRow key={student.id}>
							<TableCell align="center" component="th" scope="row">
								{student.id}
							</TableCell>
							<TableCell align="left">{student.name}</TableCell>
							<TableCell>{capitalizeString(student.gender)}</TableCell>
							<TableCell>
								<Box color={getMarkColor(student.mark)}>{student.mark}</Box>
							</TableCell>
							<TableCell>{cityMap[student.city]?.name}</TableCell>
							<TableCell align="right">
								<Button
									size="small"
									color="primary"
									onClick={() => onEdit?.(student)}
								>
									Edit
								</Button>
								&nbsp;
								<Button
									size="small"
									color="secondary"
									onClick={() => onRemove?.(student)}
								>
									Remove
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

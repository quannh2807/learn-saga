import { Box, FormControl, Grid, InputLabel, OutlinedInput } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { ChangeEvent } from 'react';
import { City, ListParams } from 'types';

interface StudentFiltersProps {
	filter: ListParams;
	cityList: City[];

	onChange?: (newFilter: ListParams) => void;
	onSearchChange?: (newFilter: ListParams) => void;
}

export const StudentFilters = ({
	filter,
	onChange,
	onSearchChange,
}: StudentFiltersProps) => {
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!onSearchChange) return;

        const newFilter = {
            ...filter,
            name_like: event.target.value,
        }

        onSearchChange(newFilter)
    };

	return (
		<Box>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth variant="outlined" size="small">
						<InputLabel htmlFor="search-by-name">Search by name</InputLabel>
						<OutlinedInput
							id="search-by-name"
							label="Search by name"
							endAdornment={<Search />}
							onChange={handleSearchChange}
						/>
					</FormControl>
				</Grid>
			</Grid>
		</Box>
	);
};

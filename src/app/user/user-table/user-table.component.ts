import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  users: any[] = [];
  paginatedUsers: any[] = [];
  filterRole: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      // Mock roles for demonstration
      this.users = data.map((user, index) => ({
        ...user,
        role: index % 2 === 0 ? 'admin' : 'user'
      }));
      this.applyFilters();
    });
  }

  applyFilters(): void {
    let filteredData = this.users;

    // Filter by role
    if (this.filterRole) {
      filteredData = filteredData.filter((user) => user.role === this.filterRole);
    }

    // Apply sorting
    if (this.sortColumn) {
      filteredData.sort((a, b) => {
        const valA = a[this.sortColumn];
        const valB = b[this.sortColumn];
        if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    this.totalPages = Math.ceil(filteredData.length / this.pageSize);
    this.paginate(filteredData);
  }

  sortData(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.applyFilters();
  }

  paginate(data: any[]): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedUsers = data.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.applyFilters();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyFilters();
    }
  }

  getSortIcon(column: string): string {
    if (this.sortColumn === column) {
      return this.sortDirection === 'asc' ? 'bi bi-arrow-up' : 'bi bi-arrow-down';
    }
    return '';
  }
}

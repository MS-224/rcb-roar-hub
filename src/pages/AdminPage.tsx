import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, Users, ShoppingCart, ImageIcon, FileText, Ticket, Settings, UserIcon, BarChart3, TrendingUp, Package } from 'lucide-react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar } from 'recharts';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Button handlers
  const handleManageSales = () => {
    alert('Opening ticket sales management...');
  };

  const handleConfigureTicketSales = () => {
    alert('Opening ticket sales configuration...');
  };

  const handleAddProduct = () => {
    alert('Opening add product form...');
  };

  const handleUploadImages = () => {
    alert('Opening image upload dialog...');
  };

  // Sample data - in a real app, this would come from your backend
  const mockFixtures = [
    { id: 1, opponent: 'Mumbai Indians', date: '2024-08-15', venue: 'M. Chinnaswamy Stadium', status: 'upcoming' },
    { id: 2, opponent: 'Chennai Super Kings', date: '2024-08-20', venue: 'MA Chidambaram Stadium', status: 'upcoming' },
  ];

  const mockOrders = [
    { id: 1, customer: 'John Doe', items: 3, total: '₹2,500', status: 'pending', date: '2024-07-25' },
    { id: 2, customer: 'Jane Smith', items: 1, total: '₹800', status: 'completed', date: '2024-07-24' },
  ];

  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user', joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', joined: '2024-02-20' },
  ];

  const mockNews = [
    { id: 1, title: 'RCB Wins Championship', author: 'Sports Desk', date: '2024-07-25', status: 'published' },
    { id: 2, title: 'New Player Signing', author: 'Team Management', date: '2024-07-24', status: 'draft' },
  ];

  // Analytics data
  const ordersData = [
    { month: 'Jan', orders: 120, revenue: 45000 },
    { month: 'Feb', orders: 150, revenue: 52000 },
    { month: 'Mar', orders: 180, revenue: 68000 },
    { month: 'Apr', orders: 220, revenue: 84000 },
    { month: 'May', orders: 260, revenue: 95000 },
    { month: 'Jun', orders: 310, revenue: 125000 },
    { month: 'Jul', orders: 280, revenue: 112000 },
  ];

  const mostOrderedItems = [
    { name: 'RCB Jersey 2024', orders: 542, revenue: '₹6,50,400' },
    { name: 'Team Cap', orders: 398, revenue: '₹1,99,000' },
    { name: 'Fan Scarf', orders: 267, revenue: '₹1,33,500' },
    { name: 'RCB Mug', orders: 189, revenue: '₹56,700' },
    { name: 'Team Keychain', orders: 156, revenue: '₹23,400' },
  ];

  const fixtureBookings = [
    { fixture: 'RCB vs MI', date: '2024-08-15', totalTickets: 50000, sold: 32450, revenue: '₹1,62,25,000' },
    { fixture: 'RCB vs CSK', date: '2024-08-20', totalTickets: 50000, sold: 28900, revenue: '₹1,44,50,000' },
    { fixture: 'RCB vs DC', date: '2024-08-25', totalTickets: 50000, sold: 15600, revenue: '₹78,00,000' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage all RCB website features from one place</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-9">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="fixtures" className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                Fixtures
              </TabsTrigger>
              <TabsTrigger value="tickets" className="flex items-center gap-2">
                <Ticket className="h-4 w-4" />
                Tickets
              </TabsTrigger>
              <TabsTrigger value="gallery" className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                Gallery
              </TabsTrigger>
              <TabsTrigger value="news" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                News
              </TabsTrigger>
              <TabsTrigger value="shop" className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Shop
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Users
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-muted-foreground">+10% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">23</div>
                    <p className="text-xs text-muted-foreground">3 urgent orders</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Upcoming Fixtures</CardTitle>
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">Next: Aug 15</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Gallery Images</CardTitle>
                    <ImageIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">156</div>
                    <p className="text-xs text-muted-foreground">12 added this week</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Admin user details and settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-rcb-red rounded-full flex items-center justify-center">
                      <UserIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Admin User</h3>
                      <p className="text-muted-foreground">admin@rcb.com</p>
                      <Badge variant="secondary">Super Admin</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Last Login</Label>
                      <p className="text-sm text-muted-foreground">Today, 10:30 AM</p>
                    </div>
                    <div>
                      <Label>Account Created</Label>
                      <p className="text-sm text-muted-foreground">January 1, 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              {/* Orders Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Orders Analytics
                  </CardTitle>
                  <CardDescription>Track order trends and revenue over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={ordersData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="orders" fill="hsl(var(--primary))" name="Orders" />
                        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="hsl(var(--chart-2))" name="Revenue (₹)" strokeWidth={3} />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Most Ordered Items */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Most Ordered Items
                    </CardTitle>
                    <CardDescription>Top selling products by order count</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mostOrderedItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-primary">#{index + 1}</span>
                            </div>
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">{item.orders} orders</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{item.revenue}</p>
                            <p className="text-sm text-muted-foreground">Revenue</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Fixture Bookings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Ticket className="h-5 w-5" />
                      Fixture Bookings
                    </CardTitle>
                    <CardDescription>Ticket sales performance by fixture</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {fixtureBookings.map((booking, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold">{booking.fixture}</h4>
                              <p className="text-sm text-muted-foreground">{booking.date}</p>
                            </div>
                            <Badge variant="outline">
                              {Math.round((booking.sold / booking.totalTickets) * 100)}% Sold
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Tickets Sold:</span>
                              <span>{booking.sold.toLocaleString()} / {booking.totalTickets.toLocaleString()}</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full" 
                                style={{ width: `${(booking.sold / booking.totalTickets) * 100}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Revenue:</span>
                              <span className="font-semibold">{booking.revenue}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Fixtures Tab */}
            <TabsContent value="fixtures" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Team Fixtures</CardTitle>
                      <CardDescription>Manage upcoming and past matches</CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Add New Fixture</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Fixture</DialogTitle>
                          <DialogDescription>Create a new match fixture</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="opponent">Opponent Team</Label>
                            <Input id="opponent" placeholder="Enter opponent team name" />
                          </div>
                          <div>
                            <Label htmlFor="date">Match Date</Label>
                            <Input id="date" type="date" />
                          </div>
                          <div>
                            <Label htmlFor="venue">Venue</Label>
                            <Input id="venue" placeholder="Enter venue name" />
                          </div>
                          <Button className="w-full">Create Fixture</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Opponent</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Venue</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockFixtures.map((fixture) => (
                        <TableRow key={fixture.id}>
                          <TableCell className="font-medium">{fixture.opponent}</TableCell>
                          <TableCell>{fixture.date}</TableCell>
                          <TableCell>{fixture.venue}</TableCell>
                          <TableCell>
                            <Badge variant={fixture.status === 'upcoming' ? 'default' : 'secondary'}>
                              {fixture.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="destructive" size="sm">Delete</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tickets Tab */}
            <TabsContent value="tickets" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Ticket Booking Management</CardTitle>
                      <CardDescription>Manage ticket sales and bookings</CardDescription>
                    </div>
                    <Button onClick={handleConfigureTicketSales}>Configure Ticket Sales</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Mumbai Indians vs RCB</CardTitle>
                        <CardDescription>August 15, 2024</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Total Tickets:</span>
                            <span>50,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sold:</span>
                            <span>32,450</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Available:</span>
                            <span>17,550</span>
                          </div>
                          <Button className="w-full mt-4" onClick={handleManageSales}>Manage Sales</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Gallery Tab */}
            <TabsContent value="gallery" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Gallery Management</CardTitle>
                      <CardDescription>Upload and manage gallery images</CardDescription>
                    </div>
                    <Button onClick={handleUploadImages}>Upload New Images</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
                      <div key={img} className="relative group">
                        <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="secondary">Edit</Button>
                            <Button size="sm" variant="destructive">Delete</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* News Tab */}
            <TabsContent value="news" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>News Management</CardTitle>
                      <CardDescription>Create and manage news articles</CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Create New Article</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Create News Article</DialogTitle>
                          <DialogDescription>Write a new news article</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="title">Article Title</Label>
                            <Input id="title" placeholder="Enter article title" />
                          </div>
                          <div>
                            <Label htmlFor="content">Content</Label>
                            <Textarea id="content" placeholder="Write your article content here..." rows={6} />
                          </div>
                          <div>
                            <Label htmlFor="status">Status</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="draft">Draft</SelectItem>
                                <SelectItem value="published">Published</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Button className="w-full">Create Article</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockNews.map((article) => (
                        <TableRow key={article.id}>
                          <TableCell className="font-medium">{article.title}</TableCell>
                          <TableCell>{article.author}</TableCell>
                          <TableCell>{article.date}</TableCell>
                          <TableCell>
                            <Badge variant={article.status === 'published' ? 'default' : 'secondary'}>
                              {article.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="destructive" size="sm">Delete</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Shop Tab */}
            <TabsContent value="shop" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Shop Management</CardTitle>
                      <CardDescription>Manage products and inventory</CardDescription>
                    </div>
                    <Button onClick={handleAddProduct}>Add New Product</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['RCB Jersey', 'Team Cap', 'Fan Scarf'].map((product, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="w-full h-32 bg-muted rounded-lg mb-4 flex items-center justify-center">
                            <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <h3 className="font-semibold mb-2">{product}</h3>
                          <div className="flex justify-between items-center mb-2">
                            <span>Price: ₹1,200</span>
                            <Badge variant="outline">In Stock</Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                            <Button variant="destructive" size="sm">Delete</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Management</CardTitle>
                  <CardDescription>Track and manage customer orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">#{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.items}</TableCell>
                          <TableCell>{order.total}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>
                            <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">View</Button>
                              <Button variant="outline" size="sm">Update</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage registered users and their permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{user.role}</Badge>
                          </TableCell>
                          <TableCell>{user.joined}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="destructive" size="sm">Delete</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
# hng-tech
**This the documentation of deploying a static website to AWS ec2 instance using Apache**

Log into your aws account

Navigate to ec2 section

click on ec2 and click the launch instance button

Input the desired name for your instance 

choose the ami (operating system) of your choice

select your instance type

create a keypair or you can use existing keys if you have one

Configure the security group to allow ssh (port 22) & http (port 80)

select the ebs volume and click on launch instance

After instance has been created click on connect and navigate to ssh client

Copy the example and paste in your terminal

**SSH INTO THE INSTANCE**

install apache2 using the (sudo apt install apache2 -y) command

clone the code using (git clone sourceUrl)

cd into the directory (cd hng-tech)

from the location or path of the file in your instance copy the file to /var/www/html (cp * /var/www/html)

then access through your instance ip at port 80

**Take Note:**
if it not loading check the status of apache using (systemctl status apache2) if its not active run (systemctl start apache2). if all this is done and still not working check the inbound security of the instance

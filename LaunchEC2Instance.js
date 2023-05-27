const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' }); // Set your preferred AWS region

const ec2 = new AWS.EC2();

async function launchEC2Instance() {
  try {
    const params = {
      ImageId: 'ami-xxxxxxxx', // Specify the Amazon Machine Image (AMI) ID
      InstanceType: 't2.micro', // Specify the instance type
      MinCount: 1,
      MaxCount: 1,
      KeyName: 'your-key-pair', // Specify your key pair name
      SecurityGroupIds: ['sg-xxxxxxxx'], // Specify the security group IDs
    };

    const data = await ec2.runInstances(params).promise();
    console.log('Instance launched successfully:', data.Instances[0].InstanceId);
  } catch (error) {
    console.error('Error launching EC2 instance:', error);
  }
}

launchEC2Instance();

using System;

namespace ValidBinarySearchTree
{
    class TreeNode
    {
        public int value { get; set; }
        public TreeNode left { get; set; }
        public TreeNode right { get; set; }

        public TreeNode(int val)
        {
            value = val;
            left = null;
            right = null;
        }
    }

    class Program
    {
        public static Program Instance = new Program();

        static void Main(string[] args)
        {
            TreeNode root = new TreeNode(5);
            root.left = new TreeNode(4);
            root.right = new TreeNode(7);

            Console.WriteLine($"{Instance.isValidBST(root)}");

        }

        public bool isValidBST(TreeNode theTree)
        {
            return validationHelper(theTree, double.NegativeInfinity, double.PositiveInfinity);
        }

        public bool validationHelper(TreeNode node, double lower, double upper)
        {
            if (node == null)
            {
                return true;
            }

            int val = node.value;

            if(val <= lower || val >= upper)
            {
                return false;
            }
            else if(!(validationHelper(node.right, val, upper))){
                return false;
            }
            else if(!(validationHelper(node.left, lower, val))){
                return false;
            }

            return true;
        }
    }
}
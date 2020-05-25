using System;
using System.Collections.Generic;
using System.Linq;

namespace TwoSum
{
    class Program
    {
        public static Program Instance = new Program();

        static void Main(string[] args)
        {
            int[] nums = { 2, 7, 11, 15 };
            int[] indexes = Instance.twoSum(nums, 9);

            for(int i = 0; i < indexes.Length; i++)
            {
                Console.WriteLine(indexes[i]);
            }
        }

        public int[] twoSum(int[] nums, int target)
        {
            Dictionary<int, int> elements = new Dictionary<int, int>();
            
            for(int i = 0; i < nums.Length; i++)
            {
                if(elements.ContainsValue(target - nums[i]))
                {
                    return new int[] { elements.FirstOrDefault(x => x.Value == target-nums[i]).Key, i };
                }
                else
                {
                    elements.Add(elements.Count, nums[i]);
                }
            }

            return new int[] { -1, -1 };
        }
    }
}
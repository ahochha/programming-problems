using System;
using System.Collections.Generic;

namespace RansomNote
{
    class Program
    {
        public static Program Instance = new Program();
        
        static void Main(string[] args)
        {
            Console.WriteLine(Instance.canConstructNote("aa", "aab"));
        }

        public bool canConstructNote(string note, string magazine)
        {
            Dictionary<char, int> mag_dict = new Dictionary<char, int>();
            int value;

            foreach (char letter in magazine)
            {
                if (mag_dict.TryGetValue(letter, out value))
                {
                    mag_dict[letter] = value + 1;
                }
                else
                {
                    mag_dict.Add(letter, 1);
                }
            }

            foreach (char letter in note)
            {
                if(mag_dict.TryGetValue(letter, out value))
                {
                    mag_dict[letter] = value - 1;

                    if (mag_dict[letter] < 0)
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }

            return true;
        }
    }
}